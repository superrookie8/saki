import { restaurants } from "@/data/restaurants";
import RestaurantCard from "@/components/RestaurantCard";
import Link from "next/link";
export default function Home() {
	return (
		<div className="min-h-screen p-4 sm:p-8">
			<header className="mb-8 text-center">
				<h1 className="text-3xl font-bold mb-2">SAKIさんのための情報提供</h1>
				<p className="text-gray-600">思いついたことを書いてみました..</p>
				<p className="text-gray-600">
					不足しているようなので情報提供も受け付けています
				</p>
				<Link href="https://guide.michelin.com/kr/ko/restaurants/seoul/seoul-restaurants-with-michelin-stars">
					<p className="text-gray-600 border border-gray-600 rounded-md p-2 hover:text-gray-900 hover:border-gray-900 transition-colors duration-200">
						ミシュランレストラン情報を見る
					</p>
				</Link>
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
