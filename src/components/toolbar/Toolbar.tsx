import type { FC } from "preact/compat";
import { useState } from "preact/compat";
import paintBucketIcon from "../../assets/paint-bucket.png";
import pencilIcon from "../../assets/pencil-icon.png";
import styles from "./Toolbar.module.css";
import { ColorPanel } from "./colorpanel/ColorPanel";
import { Tool } from "./tool/Tool";

export enum ToolType {
  PaintBucket = "paintBucket",
  Pencil = "pencil",
  Eraser = "eraser",
  EraseAll = "eraseAll",
}

interface ToolbarProps {}

const DRAWING_TOOLS = [
  {
    type: ToolType.PaintBucket,
    name: "Paint Bucket",
    icon: paintBucketIcon,
  },
  {
    type: ToolType.Pencil,
    name: "Pencil",
    icon: pencilIcon,
  },
];

const ERASING_TOOLS = [
  {
    type: ToolType.Eraser,
    name: "Eraser",
    icon: pencilIcon,
  },
  {
    type: ToolType.EraseAll,
    name: "Erase All",
    icon: pencilIcon,
  },
];

export const Toolbar: FC<ToolbarProps> = () => {
  const [selectedTool, setSelectedTool] = useState<ToolType>(ToolType.Pencil);

  const handleToolClick = (tool: ToolType) => {
    setSelectedTool(tool);
  };

  return (
    <div className={styles.toolbar}>
      {DRAWING_TOOLS.map((tool) => (
        <Tool
          icon={tool.icon}
          isSelected={selectedTool === tool.type}
          onClick={() => handleToolClick(tool.type)}
        />
      ))}
      <ColorPanel />
      {ERASING_TOOLS.map((tool) => (
        <Tool
          icon={tool.icon}
          isSelected={selectedTool === tool.type}
          onClick={() => handleToolClick(tool.type)}
        />
      ))}
    </div>
  );
};
