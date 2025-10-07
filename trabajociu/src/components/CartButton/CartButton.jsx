import { Badge, Button } from "react-bootstrap";
import { PiShoppingCart } from "react-icons/pi";

export default function CartButton({ count, onClick }) {
  return (
    <Button variant="light" className="position-relative" onClick={onClick}
    style={{
      padding: '0px 10px 10px 0px',
      margin: '5px 10px 0px 0px'
    }}>
      <PiShoppingCart size={24} />
      {count > 0 && (
        <Badge
          bg="dark"
          pill
          className="position-absolute top-0 start-0"
          style={{
            fontSize: "0.7rem",
            transform: "translate(-60%, 0%)",
          }}
        >
          {count}
        </Badge>
      )}
    </Button>
  );
}
