import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    onClick?: () => void;
    className?: string;
    type?: "submit" | "button" | "reset";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    rounded?: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl" | "full";
};

export const Button = ({
    children,
    variant = "primary",
    onClick,
    className = "",
    type = "button",
    size = "md",
    disabled = false,
    rounded = "md"
}: ButtonProps) => {
    const variants = {
        primary: "bg-white text-primary hover:bg-white/80",
        secondary: "bg-secondary text-white/80 hover:bg-secondary/80",
        ghost: "bg-transparent border border-secondary hover:bg-secondary/80",
    }

    const sizes = {
        sm: "text-sm py-1 px-2",
        md: "text-md py-2 px-4",
        lg: "text-lg py-3 px-6",
    }

    const roundedSizes = {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        xxl: "rounded-2xl",
        xxxl: "rounded-3xl",
        full: "rounded-full"
    }

    return (
        <button
            className={`${variants[variant]} ${sizes[size]} ${className} font-medium ${roundedSizes[rounded]} cursor-pointer`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    )
}