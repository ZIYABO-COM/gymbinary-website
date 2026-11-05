import ProductScreen from "./ProductScreen";
import Icon from "./ui/Icon";
import Button from "./ui/Button";
export default function MultiBranch() {
  return (
    <section className="section branch-section" id="multi-branch">
      <div className="container branch-grid">
        <div className="branch-gallery">
          <span className="branch-gallery-label">
            THE OWNER’S MULTI-BRANCH WORKSPACE
          </span>
          <ProductScreen screen="branches" className="branch-gallery-back" />
          <ProductScreen
            screen="branch-performance"
            className="branch-gallery-front"
          />
          <p>Actual app screens · demonstration data</p>
        </div>
        <div className="branch-copy">
          <p className="eyebrow">BUILT FOR MULTI-BRANCH OPERATIONS</p>
          <h2>
            Stay close to every branch.
            <br />
            From wherever you are.
          </h2>
          <p>
            Each location has its own daily rhythm. GymBinary brings those
            operations into a connected owner view, with the option to focus on
            one branch when you need the detail.
          </p>
          <ul className="check-list">
            <li>
              <Icon name="check" size={18} />
              Individual branch and combined views
            </li>
            <li>
              <Icon name="check" size={18} />
              Branch-aware member and staff management
            </li>
            <li>
              <Icon name="check" size={18} />
              Revenue reporting across locations
            </li>
          </ul>
          <Button href="#demo" variant="text">
            Discuss your branch setup
          </Button>
        </div>
      </div>
    </section>
  );
}
