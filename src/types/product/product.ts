export interface Product{
    id: number;
    product_name: string;
    sold: number;
    total_sales: number;
    image: string;
    stock_status: "In Stock" | "Out of Stock";
}