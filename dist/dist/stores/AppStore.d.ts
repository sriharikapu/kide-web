import { EventDispatcher, ModelRef, Project, File, Directory } from "../models";
import { AppAction } from "../actions/AppActions";
import Group from "../utils/group";
export declare class AppStore {
    private project;
    private output;
    private isContentModified;
    private tabGroups;
    private activeTabGroup;
    onLoadProject: EventDispatcher;
    onDidChangeStatus: EventDispatcher;
    onDidChangeProblems: EventDispatcher;
    onChange: EventDispatcher;
    onDirtyFileUsed: EventDispatcher;
    onDidChangeBuffer: EventDispatcher;
    onDidChangeData: EventDispatcher;
    onDidChangeDirty: EventDispatcher;
    onDidChangeChildren: EventDispatcher;
    onOutputChanged: EventDispatcher;
    onTabsChange: EventDispatcher;
    onSandboxRun: EventDispatcher;
    onDidChangeIsContentModified: EventDispatcher;
    constructor();
    private initStore;
    private loadProject;
    private bindProject;
    private setContentModified;
    private addFileTo;
    private deleteFile;
    private updateFileNameAndDescription;
    getActiveTabGroup(): Group;
    getTabGroups(): Group[];
    getProject(): ModelRef<Project>;
    getIsContentModified(): boolean;
    getOutput(): ModelRef<File>;
    getFileByName(name: string): ModelRef<File>;
    getFileSource(file: ModelRef<File>): string;
    getFileBuffer(file: ModelRef<File>): monaco.editor.ITextModel;
    getParent(file: ModelRef<File>): ModelRef<Directory>;
    getImmediateChild(directory: ModelRef<Directory>, name: string): ModelRef<File>;
    getPath(directory: ModelRef<Directory>): string;
    getStatus(): string;
    hasStatus(): boolean;
    private logLn;
    private splitGroup;
    private openFile;
    private openView;
    private closeView;
    private closeTabs;
    private closeGroup;
    private openFiles;
    private setViewType;
    private sendSandboxRun;
    handleActions(action: AppAction): void;
}
declare const appStore: AppStore;
export default appStore;
