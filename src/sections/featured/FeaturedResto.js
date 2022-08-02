import { useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import ButtonYellow from "../../components/button/ButtonYellow";
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

const CardItem = ({ sel, set, index, item }) => {
  const doHover = () => set(index);
  const mode = index === sel ? "featured" : "lean";
  return (
    <RestoCard key={item.name} data={item} mode={mode} onHover={doHover} />
  );
};

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
              title="TOP 3 FEATURED RESTAURANT"
              subtitle="Most Popular Restaurants"
            />
            <div className="featured-story my-4 mb-5">
              The best restaurant in our opinion is how much customers like it
              in terms of place, price, comfort and of course the taste of the
              food itself.
            </div>
            <ButtonYellow>View All Restaurant</ButtonYellow>
          </div>
          <Stack direction="horizontal" gap={3}>
            {data ? (
              data.map((item, index) => (
                <CardItem
                  key={item.name}
                  item={item}
                  set={setSelected}
                  sel={selected}
                  index={index}
                />
              ))
            ) : (
              <Loading />
            )}
          </Stack>
        </Stack>
      </Container>
    </section>
  );
}
