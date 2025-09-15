const formulas = [
  {
    id: 1,
    name: 'Kem Chống Lão Hóa Mặt',
    category: 'Chăm Sóc Da',
    description: 'Kem chống lão hóa cao cấp với peptide hoạt tính và retinol',
    ingredients: [
      { name: 'Cetyl Alcohol', percentage: '3-5%', function: 'Chất nhũ tương' },
      { name: 'Stearyl Alcohol', percentage: '2-3%', function: 'Chất nhũ tương' },
      { name: 'Glyceryl Stearate', percentage: '2-4%', function: 'Chất nhũ tương' },
      { name: 'Hyaluronic Acid', percentage: '0.1-0.5%', function: 'Chất dưỡng ẩm' },
      { name: 'Retinol', percentage: '0.25-1%', function: 'Hoạt chất chống lão hóa' },
      { name: 'Peptide Complex', percentage: '2-5%', function: 'Hoạt chất chống lão hóa' },
      { name: 'Vitamin E', percentage: '0.1-0.5%', function: 'Chất chống oxy hóa' },
      { name: 'Preservative System', percentage: '0.5-1%', function: 'Bảo quản' },
      { name: 'Fragrance', percentage: '0.1-0.3%', function: 'Hương thơm' },
      { name: 'Water', percentage: 'Balance', function: 'Dung môi' }
    ]
  },
  {
    id: 2,
    name: 'Serum Cấp Ẩm Mặt',
    category: 'Chăm Sóc Da',
    description: 'Serum nhẹ cho cấp ẩm sâu và phục hồi da',
    ingredients: [
      { name: 'Sodium Hyaluronate', percentage: '1-2%', function: 'Humectant' },
      { name: 'Niacinamide', percentage: '3-5%', function: 'Skin conditioning' },
      { name: 'Panthenol', percentage: '1-3%', function: 'Moisturizer' },
      { name: 'Glycerin', percentage: '5-10%', function: 'Humectant' },
      { name: 'Allantoin', percentage: '0.2-0.5%', function: 'Soothing agent' },
      { name: 'Carbomer', percentage: '0.1-0.3%', function: 'Thickener' },
      { name: 'Triethanolamine', percentage: '0.1-0.2%', function: 'pH adjuster' },
      { name: 'Preservative System', percentage: '0.5-1%', function: 'Preservation' },
      { name: 'Water', percentage: 'Balance', function: 'Solvent' }
    ]
  },
  {
    id: 3,
    name: 'Sữa Dưỡng Thể Cấp Ẩm',
    category: 'Chăm Sóc Cơ Thể',
    description: 'Sữa dưỡng cấp ẩm hàng ngày cho da bình thường đến da khô',
    ingredients: [
      { name: 'Mineral Oil', percentage: '8-12%', function: 'Emollient' },
      { name: 'Glycerin', percentage: '5-8%', function: 'Humectant' },
      { name: 'Cetyl Alcohol', percentage: '2-4%', function: 'Emulsifier' },
      { name: 'Dimethicone', percentage: '1-3%', function: 'Silicone emollient' },
      { name: 'Carbomer', percentage: '0.2-0.5%', function: 'Thickener' },
      { name: 'Triethanolamine', percentage: '0.2-0.4%', function: 'pH adjuster' },
      { name: 'Vitamin E Acetate', percentage: '0.1-0.5%', function: 'Antioxidant' },
      { name: 'Preservative System', percentage: '0.5-1%', function: 'Preservation' },
      { name: 'Fragrance', percentage: '0.2-0.5%', function: 'Scent' },
      { name: 'Water', percentage: 'Balance', function: 'Solvent' }
    ]
  },
  {
    id: 4,
    name: 'Dầu Gội Làm Sạch Sâu',
    category: 'Chăm Sóc Tóc',
    description: 'Dầu gội làm sạch sâu cho tóc và da đầu nhờ',
    ingredients: [
      { name: 'Sodium Laureth Sulfate', percentage: '12-18%', function: 'Primary surfactant' },
      { name: 'Cocamidopropyl Betaine', percentage: '3-5%', function: 'Secondary surfactant' },
      { name: 'Sodium Chloride', percentage: '1-3%', function: 'Viscosity modifier' },
      { name: 'Salicylic Acid', percentage: '0.5-2%', function: 'Exfoliating agent' },
      { name: 'Tea Tree Oil', percentage: '0.1-0.5%', function: 'Antimicrobial' },
      { name: 'Polyquaternium-10', percentage: '0.1-0.3%', function: 'Conditioning agent' },
      { name: 'Citric Acid', percentage: '0.1-0.3%', function: 'pH adjuster' },
      { name: 'Preservative System', percentage: '0.5-1%', function: 'Preservation' },
      { name: 'Fragrance', percentage: '0.2-0.5%', function: 'Scent' },
      { name: 'Water', percentage: 'Balance', function: 'Solvent' }
    ]
  },
  {
    id: 5,
    name: 'Dầu Xả Phục Hồi Tóc',
    category: 'Chăm Sóc Tóc',
    description: 'Dầu xả cân thận cho tóc hư tổn và tóc được xử lý hóa học',
    ingredients: [
      { name: 'Cetrimonium Chloride', percentage: '1-3%', function: 'Cationic surfactant' },
      { name: 'Cetyl Alcohol', percentage: '2-4%', function: 'Emulsifier' },
      { name: 'Stearyl Alcohol', percentage: '1-3%', function: 'Emulsifier' },
      { name: 'Hydrolyzed Keratin', percentage: '1-3%', function: 'Protein conditioner' },
      { name: 'Argan Oil', percentage: '1-2%', function: 'Natural conditioning oil' },
      { name: 'Panthenol', percentage: '0.5-2%', function: 'Moisturizer' },
      { name: 'Dimethicone', percentage: '1-3%', function: 'Silicone conditioner' },
      { name: 'Preservative System', percentage: '0.5-1%', function: 'Preservation' },
      { name: 'Fragrance', percentage: '0.2-0.5%', function: 'Scent' },
      { name: 'Water', percentage: 'Balance', function: 'Solvent' }
    ]
  },
  {
    id: 6,
    name: 'Gentle Facial Cleanser',
    category: 'Skincare',
    description: 'Mild cleanser suitable for sensitive skin',
    ingredients: [
      { name: 'Coco-Glucoside', percentage: '8-12%', function: 'Mild surfactant' },
      { name: 'Glycerin', percentage: '3-5%', function: 'Moisturizer' },
      { name: 'Cocamidopropyl Betaine', percentage: '2-4%', function: 'Foam booster' },
      { name: 'Chamomile Extract', percentage: '0.5-1%', function: 'Soothing agent' },
      { name: 'Aloe Vera Gel', percentage: '2-5%', function: 'Skin conditioner' },
      { name: 'Sodium Chloride', percentage: '0.5-1%', function: 'Viscosity modifier' },
      { name: 'Citric Acid', percentage: '0.1-0.2%', function: 'pH adjuster' },
      { name: 'Preservative System', percentage: '0.5-1%', function: 'Preservation' },
      { name: 'Water', percentage: 'Balance', function: 'Solvent' }
    ]
  },
  {
    id: 7,
    name: 'SPF 30 Sunscreen Lotion',
    category: 'Sun Care',
    description: 'Broad spectrum UV protection for daily use',
    ingredients: [
      { name: 'Zinc Oxide', percentage: '10-15%', function: 'UV filter' },
      { name: 'Titanium Dioxide', percentage: '5-8%', function: 'UV filter' },
      { name: 'Octyl Methoxycinnamate', percentage: '7-10%', function: 'UV filter' },
      { name: 'Glycerin', percentage: '3-5%', function: 'Moisturizer' },
      { name: 'Cetyl Alcohol', percentage: '2-4%', function: 'Emulsifier' },
      { name: 'Dimethicone', percentage: '2-4%', function: 'Water resistance' },
      { name: 'Vitamin E', percentage: '0.1-0.5%', function: 'Antioxidant' },
      { name: 'Preservative System', percentage: '0.5-1%', function: 'Preservation' },
      { name: 'Water', percentage: 'Balance', function: 'Solvent' }
    ]
  },
  {
    id: 8,
    name: 'Exfoliating Body Scrub',
    category: 'Body Care',
    description: 'Gentle exfoliating scrub with natural ingredients',
    ingredients: [
      { name: 'Sugar Crystals', percentage: '30-40%', function: 'Exfoliant' },
      { name: 'Coconut Oil', percentage: '15-25%', function: 'Moisturizing oil' },
      { name: 'Jojoba Oil', percentage: '5-10%', function: 'Conditioning oil' },
      { name: 'Vitamin E Oil', percentage: '0.5-1%', function: 'Antioxidant' },
      { name: 'Essential Oil Blend', percentage: '0.5-1%', function: 'Fragrance' },
      { name: 'Preservative', percentage: '0.1-0.3%', function: 'Preservation' }
    ]
  },
  {
    id: 9,
    name: 'Anti-Dandruff Shampoo',
    category: 'Hair Care',
    description: 'Therapeutic shampoo for dandruff control',
    ingredients: [
      { name: 'Zinc Pyrithione', percentage: '1-2%', function: 'Anti-dandruff active' },
      { name: 'Sodium Laureth Sulfate', percentage: '10-15%', function: 'Primary surfactant' },
      { name: 'Cocamidopropyl Betaine', percentage: '3-5%', function: 'Secondary surfactant' },
      { name: 'Salicylic Acid', percentage: '0.5-1%', function: 'Keratolytic agent' },
      { name: 'Tea Tree Oil', percentage: '0.2-0.5%', function: 'Antimicrobial' },
      { name: 'Polyquaternium-10', percentage: '0.1-0.3%', function: 'Conditioning agent' },
      { name: 'Sodium Chloride', percentage: '1-2%', function: 'Viscosity modifier' },
      { name: 'Preservative System', percentage: '0.5-1%', function: 'Preservation' },
      { name: 'Water', percentage: 'Balance', function: 'Solvent' }
    ]
  },
  {
    id: 10,
    name: 'Firming Eye Cream',
    category: 'Skincare',
    description: 'Specialized cream for delicate eye area',
    ingredients: [
      { name: 'Caffeine', percentage: '1-3%', function: 'Decongestant' },
      { name: 'Peptide Complex', percentage: '3-5%', function: 'Anti-aging active' },
      { name: 'Hyaluronic Acid', percentage: '0.5-1%', function: 'Moisturizer' },
      { name: 'Shea Butter', percentage: '3-5%', function: 'Emollient' },
      { name: 'Vitamin K', percentage: '0.1-0.5%', function: 'Dark circle treatment' },
      { name: 'Glycerin', percentage: '3-5%', function: 'Humectant' },
      { name: 'Cetyl Alcohol', percentage: '2-3%', function: 'Emulsifier' },
      { name: 'Preservative System', percentage: '0.5-1%', function: 'Preservation' },
      { name: 'Water', percentage: 'Balance', function: 'Solvent' }
    ]
  }
];

export default function PersonalCareFormulas() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Công Thức Tham Khảo Chăm Sóc Cá Nhân</h1>
          <p className="text-xl">
            Hướng dẫn công thức chuyên nghiệp cho sản phẩm chăm sóc da, chăm sóc tóc và chăm sóc cá nhân
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {formulas.map((formula) => (
            <div key={formula.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{formula.name}</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    {formula.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{formula.description}</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 font-medium text-gray-900">Nguyên Liệu</th>
                        <th className="text-left py-2 font-medium text-gray-900">%</th>
                        <th className="text-left py-2 font-medium text-gray-900">Chức Năng</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formula.ingredients.map((ingredient, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-2 text-gray-900">{ingredient.name}</td>
                          <td className="py-2 text-gray-600">{ingredient.percentage}</td>
                          <td className="py-2 text-gray-600">{ingredient.function}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                    Tải PDF
                  </button>
                  <button className="text-green-600 hover:text-green-800 font-medium">
                    Yêu Cầu Mẫu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}