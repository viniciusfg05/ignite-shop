import * as Dialog from '@radix-ui/react-dialog';
import { Contents, OverlayStyled } from '../styles/pages/modal';

export function Modal() {
    return (
        <Dialog.Root>
        <Dialog.Trigger>
            kkkkkkkkkkk
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title>
                kkkkkkkkkk
            </Dialog.Title>
            <Dialog.Description />
            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
}