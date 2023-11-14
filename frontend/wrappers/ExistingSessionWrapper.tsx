'use client'

import { useRouter } from 'next/navigation';
import { useSetDifficulty } from './DifficultySelectionContext'

export default function ExistingSessionWrapper() {
    const { sessionExists } = useSetDifficulty()
    const router = useRouter()

    const handleClick = () => {
        router.push(`/whiteboard/${sessionExists}`)
    }
    return (
        <div>
          {sessionExists.length > 1 && (
            <div className="bg-red-500 text-white p-4 flex items-center justify-between">
              <p>You already have an active session, please complete it before starting a new one.</p>
              <button 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleClick}>
                Resume
              </button>
            </div>
          )}
        </div>
      );
}