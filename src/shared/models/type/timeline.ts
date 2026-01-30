export interface TimelineItem {
    date: string
    title: string
    subtitle: string
    description: string
    type: TimelineVariant
}

export type TimelineVariant = 'study' | 'job' | 'birthday'