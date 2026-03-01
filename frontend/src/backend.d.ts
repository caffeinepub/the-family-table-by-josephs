import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface MenuItem {
    name: string;
    description: string;
    price: number;
    vegetarian: boolean;
}
export interface MenuCategory {
    name: string;
    items: Array<MenuItem>;
}
export interface backendInterface {
    getMenuCategories(): Promise<Array<MenuCategory>>;
}
