const products = [
  {name:"Urea", category:"Fertilizers", icon:"🌱", desc:"Nitrogen fertilizer for crop growth."},
  {name:"DAP", category:"Fertilizers", icon:"🌾", desc:"Phosphorus and nitrogen fertilizer."},
  {name:"NPK Fertilizer", category:"Fertilizers", icon:"🌿", desc:"Balanced crop nutrition."},
  {name:"Micronutrient Mix", category:"Micronutrients", icon:"🪴", desc:"Micronutrients for healthier crops."},
  {name:"Zinc", category:"Micronutrients", icon:"🌿", desc:"Zinc supplement for crop nutrition."},
  {name:"Bio Fertilizer", category:"Bio Products", icon:"🍃", desc:"Biological crop-support product."},
  {name:"Crop Care", category:"Crop Care", icon:"🌻", desc:"Agricultural crop-care solution."},
  {name:"Custom Product", category:"Fertilizers", icon:"🚜", desc:"Add your actual shop product here."}
];

function renderProducts(list=products){
  const grid=document.getElementById("productGrid");
  grid.innerHTML=list.map(p=>`
    <article class="product-card">
      <div class="product-icon">${p.icon}</div>
      <div class="category">${p.category}</div>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
    </article>`).join("");
  document.getElementById("noProducts").hidden=list.length!==0;
}
function filterProducts(){
  const q=document.getElementById("productSearch").value.toLowerCase().trim();
  const c=document.getElementById("categoryFilter").value;
  renderProducts(products.filter(p=>(c==="all"||p.category===c)&&(`${p.name} ${p.category} ${p.desc}`).toLowerCase().includes(q)));
}
function toggleMenu(){document.getElementById("navLinks").classList.toggle("open")}
document.getElementById("year").textContent=new Date().getFullYear();
renderProducts();
