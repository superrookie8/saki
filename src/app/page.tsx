import { restaurants } from "@/data/restaurants";
import RestaurantCard from "@/components/RestaurantCard";

export default function Home() {
	return (
		<div className="min-h-screen p-4 sm:p-8">
			<header className="mb-8 text-center">
				<h1 className="text-3xl font-bold mb-2">SAKIさんのための情報提供</h1>
				<p className="text-gray-600">思いついたことを書いてみました..</p>
				<p className="text-gray-600">
					不足しているようなので情報提供も受け付けています
				</p>
			</header>

			<main className="max-w-4xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{restaurants.map((restaurant) => (
						<RestaurantCard key={restaurant.id} restaurant={restaurant} />
					))}
				</div>
			</main>
		</div>
	);
}
