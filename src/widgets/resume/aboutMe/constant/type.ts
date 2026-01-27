type HighlightPart = {
    text: string
    accent?: boolean
}

export type InfoItemData = {
    icon?: React.ReactNode
    parts: HighlightPart[]
}