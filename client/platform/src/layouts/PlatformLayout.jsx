import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function PlatformLayout() {
    return (
        <div className='layout-wrapper'>
            <Header />
            <main className='flex justify-center'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}