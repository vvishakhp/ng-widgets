export interface MenuItem {
    label: string;
    click?: () => void;
    children?: MenuItem[];
}

export interface ContextMenuOptions {
    items: MenuItem[];
}
