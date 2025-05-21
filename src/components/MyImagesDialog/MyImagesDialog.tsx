import React from "react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Input,
  Label,
  Modal,
  TextField,
} from "react-aria-components";

import "./MyImagesDialog.css";
import { ArrowLeftIcon, ChevronLeftIcon } from "lucide-react";
import MySwiper from "../MySwiper/MySwiper";

interface MyImagesDialogProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MyImagesDialog({
  isOpen,
  setOpen,
}: MyImagesDialogProps) {
  return (
    <DialogTrigger>
      <Modal
        isOpen={isOpen}
        onOpenChange={setOpen}
      >
        <Dialog>
          <Button
            className="swipper__close"
            onPress={() => setOpen(false)}
            slot="close"
          >
            <ChevronLeftIcon />
          </Button>
          <MySwiper />
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
