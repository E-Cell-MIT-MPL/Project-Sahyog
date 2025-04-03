import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

/**
 * Toaster component for displaying toast notifications
 * @param {object} props - Component props
 * @param {string} [props.theme] - Theme for the toaster
 * @param {string} [props.className] - Additional class names
 * @param {object} [props.toastOptions] - Options for toast
 * @returns {JSX.Element}
 */
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
