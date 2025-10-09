import { Badge, Button } from "react-bootstrap";
import { PiShoppingCart } from "react-icons/pi";

export default function CartButton({ count, onClick }) {
  return (
    <Button variant="light" className="position-relative d-inline-flex align-items-center justify-content-center p-2 m-1" onClick={onClick}
    style={{
      minWidth: 44, 
      minHeight: 44
    }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <PiShoppingCart size={24} />
        {count > 0 && (
          <Badge
            bg="dark"
            pill
            className="position-absolute top-0 start-0"
            style={{
              fontSize: "0.7rem",
              transform: "translate(-60%, -20%)",
            }}
          >
            {count}
          </Badge>
        )}
      </div>
    </Button>
  );
}
