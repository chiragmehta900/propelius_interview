/* eslint-disable no-mixed-operators */
import React from 'react'
import borrowers from '../Data/borrowers.json'

const Table = () => {
  
  const [tableData, setTableData] = React.useState([])
  const [addFilter, setAddFilter] = React.useState(false)
  const [selectedOption, setSelectedOption] = React.useState("firstName")
  const [sencondOprion, setSencondOprion] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState(null)

  //filter button
  const onFilter = () => {
    setAddFilter(!addFilter)
    setTableData(borrowers)
    setSearchValue(null)
  }

  //select option action
  const onSelectedOption = (e) => {
    setSelectedOption(e.target.value)
    let numberAry = ['dateOfBirth', 'creditScore', 'w2Income', 'homePhone', 'cellPhone', 'startDate']
    for (let i = 0; i < numberAry.length; i++) {
      const element = numberAry[i];
      if (element === e.target.value) {
        setSencondOprion(true)
        return
      }
      else {
        setSencondOprion(false)
      }
    }
  }

  // ** Function to handle filter
  const handleFilter = () => {
    const value = searchValue
    let updatedData = []

    if (sencondOprion) {
      updatedData = tableData.filter(item => {
        const startsWith =
          selectedOption.toLowerCase().startsWith(value.toLowerCase())

        const includes =
          item.firstName.toLowerCase().includes(value.toLowerCase()) ||
          item.lastName.toLowerCase().includes(value.toLowerCase()) ||
          item.maritalStatus.toLowerCase().includes(value.toLowerCase()) ||
          item.emailAddress.toLowerCase().includes(value.toLowerCase()) ||
          item.currentAddress.toLowerCase().includes(value.toLowerCase()) ||
          item.employer.toLowerCase().includes(value.toLowerCase()) ||
          item.subjectPropertyAddress.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setTableData(updatedData)
    } else {
      updatedData = tableData.filter(item => {
        const startsWith =
          selectedOption.toLowerCase().startsWith(value.toLowerCase())

        const includes =
          item.creditScore.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setTableData(updatedData)
    }
  }

  React.useEffect(() => {
    setTableData(borrowers)
  }, [])

  return (
    <>
      <section className='container px-3'>
        <div className='flex justify-center'>
          <h3 className='text-2xl'>Filter Data</h3>
        </div>
        <div>
          <button className='bg-indigo-500 px-4 py-2 text-white mb-2' onClick={() => onFilter()}>Add Filter</button>
          {addFilter &&
            <div className='flex items-center'>
              <div className='mr-5'>
                <select className="py-3 pl-3 pr-8 rounded border-2" onChange={(e) => onSelectedOption(e)}>
                  <option className="pt-6">firstName</option>
                  <option className="pt-6">lastName</option>
                  <option className="pt-6">dateOfBirth</option>
                  <option className="pt-6">creditScore</option>
                  <option className="pt-6">maritalStatus</option>
                  <option className="pt-6">w2Income</option>
                  <option className="pt-6">emailAddress</option>
                  <option className="pt-6">homePhone</option>
                  <option className="pt-6">cellPhone</option>
                  <option className="pt-6">currentAddress</option>
                  <option className="pt-6">employer</option>
                  <option className="pt-6">title</option>
                  <option className="pt-6">startDate</option>
                  <option className="pt-6">subjectPropertyAddress</option>
                </select>
              </div>
              <div className='mr-5'>
                <select className="py-3 pl-3 pr-8 rounded border-2">
                  {sencondOprion ? <>
                    <option className="pt-6">Greater than</option>
                    <option className="pt-6">Less than</option>
                  </>
                    : <>
                      <option className="pt-6">Equals</option>
                      <option className="pt-6">Includes</option>
                    </>
                  }
                </select>
              </div>
              <div className='mr-5'>
                <input className="py-3 pl-3 pr-8 rounded border-2" placeholder='search' value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)} />
              </div>
              <div>
                <button className="bg-indigo-500 px-4 py-2 text-white mr-5" onClick={() => handleFilter()}>✓</button>
                <button className="bg-indigo-500 px-4 py-2 text-white" onClick={() => onFilter()}>X</button>
              </div>
            </div>
          }
        </div>

        <div className='mt-10'>
          <table className="min-w-full text-sm text-gray-400">
            <thead className="bg-gray-800 text-xs uppercase font-medium">
              <tr>
                <th className='px-6 py-3 text-left tracking-wider'>firstName</th>
                <th className='px-6 py-3 text-left tracking-wider'>lastName</th>
                <th className='px-6 py-3 text-left tracking-wider'>dateOfBirth</th>
                <th className='px-6 py-3 text-left tracking-wider'>creditScore</th>
                <th className='px-6 py-3 text-left tracking-wider'>maritalStatus</th>
                <th className='px-6 py-3 text-left tracking-wider'>w2Income</th>
                <th className='px-6 py-3 text-left tracking-wider'>emailAddress</th>
                <th className='px-6 py-3 text-left tracking-wider'>homePhone</th>
                <th className='px-6 py-3 text-left tracking-wider'>cellPhone</th>
                <th className='px-6 py-3 text-left tracking-wider'>currentAddress</th>
                <th className='px-6 py-3 text-left tracking-wider'>employer</th>
                <th className='px-6 py-3 text-left tracking-wider'>title</th>
                <th className='px-6 py-3 text-left tracking-wider'>startDate</th>
                <th className='px-6 py-3 text-left tracking-wider'>subjectPropertyAddress</th>
              </tr>
            </thead>
            <tbody className='bg-gray-800'>
              {tableData.map((list, index) => {
                return (
                  <tr className='bg-black bg-opacity-20' key={index}>
                    <td className='px-6 py-4 whitespace-nowrap'>{list.firstName}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{list.lastName}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{list.dateOfBirth}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{list.creditScore}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{list.maritalStatus}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{list.w2Income}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{list.emailAddress}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{list.homePhone}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{list.cellPhone}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{list.currentAddress}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{list.employer}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{list.title}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{list.startDate}</td>
                    <td className='px-6 py-4 whitespace-nowrap'>{list.subjectPropertyAddress}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Table
