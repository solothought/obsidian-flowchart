import { Plugin, MarkdownPostProcessorContext, PluginSettingTab, App, Setting } from 'obsidian';
import { FlowChart } from '@solothought/text2chart';
import text2chartCSS from '@solothought/text2chart/style.css';
import styles from './styles.css';

// Settings interface
interface StFlowSettings {
    defaultWidth: string;
    defaultHeight: string;
}

const DEFAULT_SETTINGS: StFlowSettings = {
    defaultWidth: '800px',
    defaultHeight: '600px'
};

export default class StFlowPlugin extends Plugin {
    settings: StFlowSettings;
    private fullscreenChart: FlowChart | null = null; // Track fullscreen instance

    async onload() {
        console.log('Loading StFlow Plugin');
        console.log(text2chartCSS.substring(0,50));
        await this.loadSettings();
        this.addStyle();
        this.registerMarkdownCodeBlockProcessor('stflow', this.processStFlow.bind(this));
        this.addSettingTab(new StFlowSettingTab(this.app, this));
    }

    private addStyle() {
        console.log("Adding style for stflow");
        const style = document.createElement('style');
        style.appendChild(document.createTextNode(text2chartCSS + styles));
        document.head.appendChild(style);
    }

    async processStFlow(source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) {
        try {
            // Parse metadata for custom size
            let width = this.settings.defaultWidth;
            let height = this.settings.defaultHeight;
            let flowchartText = source;

            const lines = source.split('\n');
            let metadataEnd = 0;

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();
                if (!line.startsWith('#')) {
                    metadataEnd = i;
                    break;
                }
                const parts = line.substring(1).split(';').map(part => part.trim());
                for (const part of parts) {
                    if (part.startsWith('width:')) {
                        width = part.split(':')[1].trim();
                    } else if (part.startsWith('height:')) {
                        height = part.split(':')[1].trim();
                    } else if (part.match(/^\s*width\s*:/)) {
                        width = part.split(':')[1].trim();
                    } else if (part.match(/^\s*height\s*:/)) {
                        height = part.split(':')[1].trim();
                    }
                }
                if (i === lines.length - 1) metadataEnd = lines.length;
            }

            flowchartText = lines.slice(metadataEnd).join('\n');

            // Create container
            const container = el.createEl('div', { cls: 'stflow-container' });
            const chartContainer = container.createEl('div', { cls: 'stflow-chart' });

            // Initialize FlowChart
            const chart = new FlowChart({
                target: chartContainer,
                props: {
                    text: flowchartText,
                    width: width,
                    height: height,
                    minimap: false,
                    toolbar: false,
                }
            });

            // Add fullscreen icon
            const fullscreenIcon = el.createEl('span', {
                cls: 'stflow-fullscreen-icon',
                text: '⛶'
            });

            // Toggle fullscreen
            fullscreenIcon.addEventListener('click', () => {
                if (!this.fullscreenChart) {
                    // Create fullscreen overlay
                    const overlay = document.body.appendChild(document.createElement('div'));
                    overlay.className = 'stflow-fullscreen-overlay';

                    const content = overlay.appendChild(document.createElement('div'));
                    content.className = 'stflow-fullscreen-content';

                    // Render fullscreen chart
                    this.fullscreenChart = new FlowChart({
                        target: content,
                        props: {
                            text: flowchartText,
                            width: '90vw',
                            height: '90vh'
                        }
                    });

                    // Add close button
                    const closeButton = content.appendChild(document.createElement('span'));
                    closeButton.className = 'stflow-fullscreen-close';
                    closeButton.textContent = '✖'; // Close symbol
                    closeButton.addEventListener('click', () => {
                        overlay.remove();
                        this.fullscreenChart?.$destroy();
                        this.fullscreenChart = null;
                        fullscreenIcon.textContent = '⛶';
                    });

                    fullscreenIcon.textContent = '🗕'; // Minimize symbol while open
                }
            });
        } catch (error) {
            const errorEl = el.createEl('div', { cls: 'stflow-error' });
            errorEl.textContent = `Error rendering flowchart: ${error.message}`;
            errorEl.style.color = 'red';
            errorEl.style.fontFamily = 'monospace';
        }
    }

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }

    onunload() {
        console.log('Unloading StFlow Plugin');
        if (this.fullscreenChart) {
            this.fullscreenChart.$destroy();
            this.fullscreenChart = null;
        }
    }
}

// Settings tab
class StFlowSettingTab extends PluginSettingTab {
    plugin: StFlowPlugin;

    constructor(app: App, plugin: StFlowPlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;
        containerEl.empty();

        new Setting(containerEl)
            .setName('Default Flowchart Width')
            .setDesc('Set the default width (e.g., 800px, 100%)')
            .addText(text => text
                .setPlaceholder('800px')
                .setValue(this.plugin.settings.defaultWidth)
                .onChange(async (value) => {
                    this.plugin.settings.defaultWidth = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('Default Flowchart Height')
            .setDesc('Set the default height (e.g., 600px, 100%)')
            .addText(text => text
                .setPlaceholder('600px')
                .setValue(this.plugin.settings.defaultHeight)
                .onChange(async (value) => {
                    this.plugin.settings.defaultHeight = value;
                    await this.plugin.saveSettings();
                }));
    }
}