import { FC } from 'react'
import { FaTrash } from 'react-icons/fa'

export const TransactionTable: FC = () => {
	return (
		<>
			<div className="bg-slate-800 px-4 py-3 mt-4 rounded-md">
				<table className="w-full">
					<thead>
						<td className="font-bold"> № </td>
						<td className="font-bold">Title</td>
						<td className="font-bold">Amount</td>
						<td className="font-bold">Category</td>
						<td className="font-bold">Date</td>
						<td className="text-right">Action</td>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>April</td>
							<td>300</td>
							<td>Salary</td>
							<td>Data</td>
							<td>
								<button className="btn hover:btn-red ml-auto">
									<FaTrash />
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}
