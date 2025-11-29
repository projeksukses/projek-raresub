export interface TableColumn<T> {
    key: keyof T
    label: string
    headerClassName?: string
    cellClassName?: string
    cellStyle?: React.CSSProperties
    render?: (value: T[keyof T], row: T, rowIndex: number) => React.ReactNode
}


export interface HeaderStyleConfig {
    px?: string
    py?: string
    fontWeight?: string
    textAlign?: string
    textColor?: string
    bgColor?: string
    borderTop?: string
    borderBottom?: string
}

export interface CellStyleConfig {
    px?: string
    py?: string
    fontWeight?: string
    textAlign?: string
    textColor?: string
    borderTop?: string
    borderBottom?: string
    borderLeft?: string
    borderRight?: string
    rowHover?: string
    rowTransition?: string
    rowStyle?: React.CSSProperties
}

export interface TableConfig<T> {
    columns: TableColumn<T>[]
    tableStyle?: "default" | "plain"
    className?: string
    customRender?: (
        value: T[keyof T],
        col: TableColumn<T>,
        row: T,
        rowIndex: number
    ) => React.ReactNode
    headerStyle?: HeaderStyleConfig
    cellStyle?: CellStyleConfig
    theadClassName?: string
    tbodyClassName?: string
}


export interface PaginationConfig {
    currentPage: number
    totalPages: number
    itemsPerPage: number
    totalItems: number
    onPageChange: (page: number) => void
    label?: string
}

export interface DataTableProps<T> {
    config?: TableConfig<T>
    data: T[]
    pagination?: PaginationConfig
}
