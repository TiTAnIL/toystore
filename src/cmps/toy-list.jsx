import { Link } from 'react-router-dom'
import { ToyPreview } from './toy-preview'

export function ToyList({ toys, onRemoveToy }) {

    return (
        <div className='toy-list'>
            {toys.map(toy => <ToyPreview key={toy._id} toy={toy} onRemoveToy={onRemoveToy} />)}
        </div>
    )
}