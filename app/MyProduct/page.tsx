  import { getwordSizes } from "@/Style/word";
 
 
 export default function MyProduct() {
  return (
    <div>
      <h1 style={{ fontSize: getwordSizes({key: "h1"}) }}>My Product</h1>
    </div>
  );
}