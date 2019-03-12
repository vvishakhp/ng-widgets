export interface MenuItem {
    label: string;
    click?: () => void;
    children?: MenuItem[];
    enabled?: boolean;
    active?: boolean;
}

export interface ContextMenuOptions {
    items: MenuItem[];
}
