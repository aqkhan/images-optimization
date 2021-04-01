import Image from 'next/image'
import SingleCard from "../components/SingleCard";

export default function Home() {
  return (
      <>
        <div className="">
          {/* Remove py-8 */}
          <div className="mx-auto container">
            <div className="flex flex-wrap items-center lg:justify-between justify-center">
                <SingleCard imgURL="https://images.unsplash.com/photo-1617259902893-cdee53178359?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" />
                <SingleCard imgURL="https://images.unsplash.com/photo-1603415188058-6e8a67b445c7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1911&q=80" />
                <SingleCard imgURL="https://images.unsplash.com/photo-1489575623533-95058aaa3685?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80" />
                <SingleCard imgURL="https://images.unsplash.com/photo-1447175008436-054170c2e979?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2361&q=80" />
                <SingleCard imgURL="https://images.unsplash.com/photo-1524593166156-312f362cada0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80" />
                <SingleCard imgURL="https://images.unsplash.com/photo-1485637701894-09ad422f6de6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1920&q=80" />

            </div>
          </div>
        </div>
      </>
  )
}
