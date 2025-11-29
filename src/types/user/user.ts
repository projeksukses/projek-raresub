import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string | StaticImport;
}
