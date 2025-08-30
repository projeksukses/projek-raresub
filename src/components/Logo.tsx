import Image from "next/image";
import LogoIcon from "../../public/icons/logo/logo.png";

interface LogoProps {
    size?: "sm" | "md" | "lg";
    className?: string;
}

//Size defaultnya adalah md jika tidak di kasih props size
export const Logo = ({
    size = "md",
    className = ""
}: LogoProps) => {
     const sizes = {
        sm: "w-10",
        md: "w-20",
        lg: "w-32",
    }

    return (
    <div className={`relative ${sizes[size]} ${className} aspect-square`}>
        <Image
        src={LogoIcon}
        fill
        alt="Logo Raresub"
        className="object-contain"
        />        
    </div>
    )
};