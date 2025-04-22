"use client";

import Image from "next/image";
import { Restaurant } from "@/data/restaurants";
import { useRef, useState, MouseEvent, TouchEvent } from "react";

interface RestaurantCardProps {
	restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
	const scrollContainerRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	const handleMouseDown = (e: MouseEvent) => {
		if (!scrollContainerRef.current) return;
		setIsDragging(true);
		setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
		setScrollLeft(scrollContainerRef.current.scrollLeft);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (!isDragging || !scrollContainerRef.current) return;
		e.preventDefault();
		const x = e.pageX - scrollContainerRef.current.offsetLeft;
		const walk = x - startX; // 감도 조절을 위해 *2 제거
		scrollContainerRef.current.scrollLeft = scrollLeft - walk;
	};

	// 스크롤 버튼 핸들러 추가
	const handleScroll = (direction: "left" | "right") => {
		if (!scrollContainerRef.current) return;
		const scrollAmount = 300; // 한 번에 스크롤할 픽셀 값
		const newScrollLeft =
			scrollContainerRef.current.scrollLeft +
			(direction === "left" ? -scrollAmount : scrollAmount);
		scrollContainerRef.current.scrollTo({
			left: newScrollLeft,
			behavior: "smooth",
		});
	};

	return (
		<div className="flex flex-col gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
			<div className="relative">
				{/* 스크롤 버튼 추가 */}
				{restaurant.images.length > 1 && (
					<>
						<button
							onClick={() => handleScroll("left")}
							className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
							style={{ transform: "translate(-50%, -50%)" }}
						>
							◀
						</button>
						<button
							onClick={() => handleScroll("right")}
							className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
							style={{ transform: "translate(50%, -50%)" }}
						>
							▶
						</button>
					</>
				)}

				<div
					ref={scrollContainerRef}
					className={`relative w-full h-48 ${
						restaurant.images.length > 1 ? "overflow-x-scroll" : ""
					} scrollbar-hide select-none`}
					style={{
						WebkitOverflowScrolling: "touch",
						msOverflowStyle: "none",
						scrollbarWidth: "none",
						cursor: isDragging ? "grabbing" : "grab",
					}}
					onMouseDown={handleMouseDown}
					onMouseUp={handleMouseUp}
					onMouseLeave={handleMouseUp}
					onMouseMove={handleMouseMove}
				>
					<div
						className={`flex gap-2 h-full ${
							restaurant.images.length === 1 ? "justify-center" : ""
						}`}
					>
						{restaurant.images.map((image, index) => (
							<div
								key={index}
								className={`relative ${
									restaurant.images.length === 1 ? "w-full" : "min-w-[300px]"
								} h-full`}
							>
								<Image
									src={image}
									alt={`${restaurant.name} - Image ${index + 1}`}
									fill
									className="object-cover rounded-md"
								/>
								{restaurant.imageDescriptions && (
									<div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-white">
										<p className="text-sm">
											{restaurant.imageDescriptions.ko[index]}
										</p>
										<p className="text-xs text-gray-200">
											{restaurant.imageDescriptions.jp[index]}
										</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<div>
					<h3 className="text-xl font-bold">{restaurant.name}</h3>
					<p className="text-sm text-gray-600">{restaurant.nameJP}</p>
				</div>

				<div>
					<p className="text-sm">{restaurant.description}</p>
					<p className="text-sm text-gray-600">{restaurant.descriptionJP}</p>
				</div>

				<div>
					<p className="text-sm">{restaurant.location}</p>
					<p className="text-sm text-gray-600">{restaurant.locationJP}</p>
				</div>

				<a
					href={restaurant.link}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-center"
				>
					詳細を見る
				</a>
			</div>
		</div>
	);
}
