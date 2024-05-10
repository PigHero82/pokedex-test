// React
import { PropsWithChildren } from "react"

// Components
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react"

export function ComparisonModal(params: PropsWithChildren<{
  show: boolean
  onClose: () => void
}>) {
  return (
    <Transition appear show={params.show}>
      <Dialog as="div" className="relative z-10 focus:outline-none" onClose={params.onClose}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel className="w-full rounded-xl bg-white p-6 backdrop-blur-2xl">
                {params.children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}