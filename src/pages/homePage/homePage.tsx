import Grid from "@mui/material/Grid";
import SimpleLinkCard, {
  SimpleLinkCardProps,
} from "../../components/SimpleLinkCard/SimpleLinkCard";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";

const cardDetails: SimpleLinkCardProps[] = [
  {
    title: "Raw Materials",
    description: "Raw Material Inputs",
    imageName: "raw-material",
    linkPath: "/raw-material",
  },
  {
    title: "Production Detail",
    description: "Production Detail Inputs",
    imageName: "production-detail",
    linkPath: "/production-detail",
  },
  {
    title: "Reports",
    description:
      "Spinning Machine Wise Report, Spinning Machine Wise Report for Single Yarn Process, Double Yarn : Ring Double process, Double yearn : T.F.O process",
    linkPath: "/report",
  },
  {
    title: "Admin Settings",
    description:
      "Machine Wise Settings, Spinning Production Constants, Count Wise Fourties Conversion",
    linkPath: "/admin",
  },
];
const HomePage = () => {
  return (
    <>
      <ResponsiveAppBar />
      <div>
        <Grid
          container
          direction="row"
          //   justifyContent="space-evenly"
          alignItems="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(cardDetails).map((data, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <div>
                <SimpleLinkCard
                  title={data.title}
                  description={data.description}
                  imageName={data.imageName ? data.imageName : ""}
                  linkPath={data.linkPath}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default HomePage;
