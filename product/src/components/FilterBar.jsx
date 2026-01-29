
function FilterBar({ categories, activeCategory, onChange }) {
return (
<div className="filter-bar">
{categories.map((cat) => (
<button
key={cat}
className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
onClick={() => onChange(cat)}
>
{cat}
</button>
))}
</div>
);
}


export default FilterBar;