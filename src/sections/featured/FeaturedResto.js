import { useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import HeadSection from "../../components/headSection/HeadSection";
import RestoCard from "../../components/restoCard/RestoCard";
import restaurantList from "../../data/restaurantList";
import "./FeaturedResto.css";

const Loading = () => (
  <Stack direction="horizontal" gap={3}>
    <RestoCard />
    <RestoCard />
  </Stack>
);

export default function FeaturedResto() {
  const [selected, setSelected] = useState(0);
  const [data, setData] = useState(false);

  useEffect(() => {
    const data = restaurantList.filter((list) => list.isFeatured === 1);
    setTimeout(setData, 7000, data);
  }, []);

  return (
    <section className="FeaturedResto">
      <Container>
        <Stack
          direction="horizontal"
          gap={5}
          className="justify-content-between"
        >
          <div>
            <HeadSection
              align="left"
              title="Most Popular Restaurants"
              subtitle="TOP 3 FEATURED RESTAURANT"
            />
          </div>
          <div>
            {data ? (
              data.map((item) => (
                <RestoCard key={item.name} data={item} mode="featured" />
              ))
            ) : (
              <Loading />
            )}
          </div>
        </Stack>
      </Container>
    </section>
  );
}
