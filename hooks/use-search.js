import {
	useEffect,
	useState,
} from 'react'

export default function useSearch({
	data,
	searchProperties = ['name'],
}) {
	const [search, setSearch] = useState('')
	const [prevSearch, setPrevSearch] = useState('')
	const [filteredData, setFilteredData] = useState(data)

	function onSearch(newSearch) {
		setPrevSearch(search)
		setSearch(newSearch)
	}

	function filterItem(item, searchTerm) {
		const itemProperties = searchProperties.map((property) => item[property].toLowerCase())
		const searchTermLowerCase = searchTerm.toLowerCase()

		return itemProperties.some((property) => property.includes(searchTermLowerCase))
	}

	function applyFilter() {
		setFilteredData(data.filter((item) => filterItem(item, search)))
	}

	function mayApplyFilter() {
		const isValidData = data != null && data != undefined
		const isValidSearch = search != null && search != undefined
		const isRemovingFilter = search == '' && prevSearch != '' && prevSearch != null && prevSearch != undefined
		const mayApplyFilter = isValidData && (isValidSearch || isRemovingFilter)

		return mayApplyFilter
	}

	useEffect(() => {
		if (!mayApplyFilter()) {
			return
		}

		applyFilter()
	}, [search, data])

	return [filteredData, onSearch]
}