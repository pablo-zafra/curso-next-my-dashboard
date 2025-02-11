import { CartCounter } from "../../shopping-cart/components/CartCounter";

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito de compra</span>
      <CartCounter />
    </div>
  );
}
