import Stack from "react-bootstrap/Stack";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

export default function Pills({text, onRemove}) {
  return (
    <Stack direction="horizontal" gap={2} style={{fontFamily:"Arial, Helvetica, sans-serif"}}>
      <Badge pill bg="light" text="dark">
        {text}
        <Button
          variant="light"
          size="sm"
          className="ms-2 p-0 px-1"
          onClick={onRemove}
        >
          ×
        </Button>
      </Badge>
    </Stack>
  )
}
