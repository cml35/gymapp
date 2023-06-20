"use client";

import { Dialog } from "@headlessui/react";

interface WorkoutOptionDetailDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const WorkoutOptionDetailDialog = (props: WorkoutOptionDetailDialogProps) => {
  const { isOpen, setIsOpen } = props;

  return (
    <Dialog
      className="relative z-10"
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <div className="fixed inset-0 bg-white/30" aria-hidden="true" />
      <div className="fixed inset-0 flex min-h-full items-center justify-center p-4 text-center"></div>
      <Dialog.Panel>
        <Dialog.Title>Workout Detail</Dialog.Title>
        <Dialog.Description>Testing workout details</Dialog.Description>

        <p>Yo yo yo yo</p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default WorkoutOptionDetailDialog;
