import Navbar from "../components/navbar";

export default function Home() {
  return (
	  <div>
	  	<Navbar />
	  	<main className="flex min-h-screen flex-col items-center justify-between p-24">

			<div className="flex flex-col items-center justify-center">
	  			<h1 className="text-6xl font-bold text-center">Bienvenido a Mini Twitter</h1>
	  		</div>
		</main>
	  </div>
  )
}
