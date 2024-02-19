import "./card.css";
const Cards = ({ item }) => {
	return (
		<>
			<article
				className={
					item?.latency > 999 ||
					item.statusCode === 200 ||
					item?.statusCode === 201
						? "red-box card"
						: "green-box card"
				}>
				<ul style={{ listStyle: "none" }}>
					<li>
						{" "}
						<h4>{item.name}</h4>
					</li>
					<li>
						<h4>Latency : {item.latency / 1000} s</h4>
					</li>
					<li>HTTP Method : {item.httpMethod}</li>
					<li>Status Description : {item.statusDescription}</li>
				</ul>
			</article>
		</>
	);
};

export default Cards;
