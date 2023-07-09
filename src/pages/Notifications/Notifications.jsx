import {useState, useCallback, useEffect} from 'react'
import axios from '../../axios/axiosInstance'
import { useUserContext } from '../../context/user.context'
import { toast } from 'react-hot-toast'

function Notifications() {

    const {user} = useUserContext()

    const [notifications, setNotifications] = useState([])

    const getNotifications = useCallback(async () => {
        try {
            const {data} = await axios.get('/notification', {
                headers: {
                    authorization: `Bearer ${user.accessToken}`
                }
            })
            console.log(data)
            setNotifications(prev => data.notifications)
        }
        catch(error) {
            console.log(error)
        }
    }, [user])

    useEffect(() => {
        getNotifications()
    }, [getNotifications])

    const handleApproval = async (notificationId, verify) => {
        try {
            const {data} = await axios.post('/add-member/update-notification', {notificationId, verify}, {
                headers: {
                    authorization: `Bearer ${user.accessToken}`
                }
            })
            console.log(data)
            toast.success(data.message)
            setNotifications(prev => prev.filter(notification => notification._id !== notificationId))
        }
        catch(error) {
            console.log(error)
            toast.error(error.response.data.message || 'Something went wrong')
        }
    }


  return (
    <section className='container-padding'>
        <div className='font-bold text-xl -mt-5'>Notifications</div>
        {
            notifications.map(notification => (
                <div className='py-4 space-y-4 border-b-[2px] w-full'>
                    <p>{notification.message}</p>
                    {notification?.showBtns !== false && <div className='inline-flex w-full gap-4'>
                    <button onClick={(e) => {
                        e.preventDefault()
                        handleApproval(notification._id, true)
                    }} className='btn-small'>Approve</button>
                    <button onClick={(e) => {
                        e.preventDefault()
                        handleApproval(notification._id, false)
                    }} className='btn-small'>Reject</button>
                    </div>}
                </div>
            ))
        }
    </section>
  )
}

export default Notifications