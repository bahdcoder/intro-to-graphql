import { useData } from "../utils/data";

export function DoYouKnow() {
  const { doYouKnow } = useData();

  return (
    <p className="py-4 italic text-sm text-pink-800 font-bold">
      Do you know {doYouKnow?.firstName} from {doYouKnow?.location?.city},{" "}
      {doYouKnow?.location?.country} ?
    </p>
  );
}
