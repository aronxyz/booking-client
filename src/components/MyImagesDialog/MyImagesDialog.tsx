import React from "react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
} from "react-aria-components";

import "./MyImagesDialog.css";
import { ChevronLeftIcon } from "lucide-react";
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
