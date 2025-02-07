document.addEventListener("DOMContentLoaded", function () {
	const seatMap = document.getElementById("seatMap");
	const layout = [
		"AAA_AAA",
		"ARR_RAA",
		"AAAAAAAAA",
		"AARRARRAA",
		"AARAA_AAA",
		"AAAAA_AAA",
	];
	layout.forEach((rowConfig) => {
		const row = document.createElement("div");
		row.classList.add("row");
		rowConfig.split("").forEach((seatType) => {
			if (seatType === "_") {
				const spacer = document.createElement("div");
				spacer.style.width = "30px";
				row.appendChild(spacer);
			} else {
				const seat = document.createElement("div");
				seat.classList.add("seat");
				if (seatType === "R") seat.classList.add("reserved");
				else seat.classList.add("available");
				seat.addEventListener("click", function () {
					if (seat.classList.contains("reserved")) return;
					seat.classList.toggle("selected");
				});
				row.appendChild(seat);
			}
		});
		seatMap.appendChild(row);
	});
});
