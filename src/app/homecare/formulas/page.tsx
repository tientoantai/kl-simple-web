const formulas = [
  {
    id: 1,
    name: 'Chất Giặt Lỏng',
    category: 'Làm Sạch',
    description: 'Công thức chất giặt lỏng hiệu suất cao cho mọi loại vải',
    ingredients: [
      { name: 'Linear Alkylbenzene Sulfonate (LAS)', percentage: '15-20%', function: 'Chất hoạt động chính' },
      { name: 'Alcohol Ethoxylate (AE)', percentage: '5-8%', function: 'Chất hoạt động phụ' },
      { name: 'Sodium Carbonate', percentage: '8-12%', function: 'Chất tạo kiềm' },
      { name: 'Sodium Citrate', percentage: '3-5%', function: 'Chất kết tủa kim loại' },
      { name: 'Protease Enzyme', percentage: '0.5-1%', function: 'Loại bỏ vết protein' },
      { name: 'Optical Brightener', percentage: '0.1-0.3%', function: 'Chất làm trắng quang học' },
      { name: 'Fragrance', percentage: '0.2-0.5%', function: 'Hương thơm' },
      { name: 'Water', percentage: 'Balance', function: 'Dung môi' }
    ]
  },
  {
    id: 2,
    name: 'Nước Rửa Chén',
    category: 'Làm Sạch',
    description: 'Công thức nhẹ nhàng nhưng hiệu quả cho việc rửa chén bằng tay',
    ingredients: [
      { name: 'Sodium Laureth Sulfate (SLES)', percentage: '12-18%', function: 'Primary surfactant' },
      { name: 'Cocamidopropyl Betaine', percentage: '3-5%', function: 'Foam booster' },
      { name: 'Sodium Chloride', percentage: '1-3%', function: 'Viscosity modifier' },
      { name: 'Citric Acid', percentage: '0.1-0.3%', function: 'pH adjuster' },
      { name: 'Preservative System', percentage: '0.2-0.5%', function: 'Preservation' },
      { name: 'Colorant', percentage: '0.01-0.1%', function: 'Color' },
      { name: 'Fragrance', percentage: '0.2-0.4%', function: 'Scent' },
      { name: 'Water', percentage: 'Balance', function: 'Solvent' }
    ]
  },
  {
    id: 3,
    name: 'Chất Tẩy Rửa Đa Năng',
    category: 'Làm Sạch',
    description: 'Công thức làm sạch linh hoạt cho nhiều bề mặt',
    ingredients: [
      { name: 'Alcohol Ethoxylate', percentage: '2-4%', function: 'Surfactant' },
      { name: 'Isopropyl Alcohol', percentage: '5-10%', function: 'Solvent' },
      { name: 'Ammonia Solution', percentage: '1-3%', function: 'Cleaning agent' },
      { name: 'EDTA', percentage: '0.1-0.3%', function: 'Chelating agent' },
      { name: 'Sodium Hydroxide', percentage: '0.1-0.5%', function: 'pH adjuster' },
      { name: 'Colorant', percentage: '0.01-0.1%', function: 'Color' },
      { name: 'Fragrance', percentage: '0.1-0.3%', function: 'Scent' },
      { name: 'Water', percentage: 'Balance', function: 'Solvent' }
    ]
  },
  {
    id: 4,
    name: 'Nước Xả Vải',
    category: 'Chăm Sóc Giặt Giũ',
    description: 'Công thức điều hòa vải cô đặc',
    ingredients: [
      { name: 'Diethyl Ester Dimethyl Ammonium Chloride', percentage: '3-6%', function: 'Cationic surfactant' },
      { name: 'Fatty Alcohol', percentage: '1-2%', function: 'Emulsifier' },
      { name: 'Calcium Chloride', percentage: '0.5-1%', function: 'Stabilizer' },
      { name: 'Formic Acid', percentage: '0.1-0.3%', function: 'pH adjuster' },
      { name: 'Preservative', percentage: '0.1-0.2%', function: 'Preservation' },
      { name: 'Colorant', percentage: '0.01-0.05%', function: 'Color' },
      { name: 'Fragrance', percentage: '0.5-1%', function: 'Scent' },
      { name: 'Water', percentage: 'Balance', function: 'Solvent' }
    ]
  },
  {
    id: 5,
    name: 'Chất Làm Sạch Kính',
    category: 'Làm Sạch',
    description: 'Công thức làm sạch kính và gương không để lại vết',
    ingredients: [
      { name: 'Isopropyl Alcohol', percentage: '8-12%', function: 'Solvent' },
      { name: 'Ethylene Glycol Monobutyl Ether', percentage: '1-3%', function: 'Solvent' },
      { name: 'Ammonia Solution', percentage: '0.5-1%', function: 'Cleaning agent' },
      { name: 'Surfactant Blend', percentage: '0.1-0.3%', function: 'Wetting agent' },
      { name: 'Colorant', percentage: '0.01-0.05%', function: 'Color' },
      { name: 'Water', percentage: 'Balance', function: 'Solvent' }
    ]
  },
  {
    id: 6,
    name: 'Toilet Bowl Cleaner',
    category: 'Cleaning',
    description: 'Acidic formula for limescale and stain removal',
    ingredients: [
      { name: 'Hydrochloric Acid', percentage: '8-12%', function: 'Cleaning acid' },
      { name: 'Nonionic Surfactant', percentage: '1-3%', function: 'Wetting agent' },
      { name: 'Thickening Agent', percentage: '0.5-1%', function: 'Viscosity modifier' },
      { name: 'Corrosion Inhibitor', percentage: '0.1-0.3%', function: 'Metal protection' },
      { name: 'Colorant', percentage: '0.01-0.1%', function: 'Color' },
      { name: 'Fragrance', percentage: '0.1-0.3%', function: 'Scent' },
      { name: 'Water', percentage: 'Balance', function: 'Solvent' }
    ]
  },
  {
    id: 7,
    name: 'Floor Cleaner',
    category: 'Cleaning',
    description: 'pH-neutral formula for all floor types',
    ingredients: [
      { name: 'Alcohol Ethoxylate', percentage: '1-3%', function: 'Surfactant' },
      { name: 'Sodium Citrate', percentage: '0.5-1%', function: 'Builder' },
      { name: 'Sodium Bicarbonate', percentage: '0.5-1%', function: 'pH buffer' },
      { name: 'Preservative System', percentage: '0.1-0.3%', function: 'Preservation' },
      { name: 'Colorant', percentage: '0.01-0.05%', function: 'Color' },
      { name: 'Fragrance', percentage: '0.1-0.3%', function: 'Scent' },
      { name: 'Water', percentage: 'Balance', function: 'Solvent' }
    ]
  },
  {
    id: 8,
    name: 'Degreaser',
    category: 'Heavy Duty Cleaning',
    description: 'Industrial strength degreasing formula',
    ingredients: [
      { name: 'Sodium Hydroxide', percentage: '3-8%', function: 'Alkaline agent' },
      { name: 'Sodium Metasilicate', percentage: '5-10%', function: 'Builder' },
      { name: 'Nonionic Surfactant', percentage: '2-5%', function: 'Degreasing agent' },
      { name: 'EDTA', percentage: '0.5-1%', function: 'Chelating agent' },
      { name: 'Antifoam Agent', percentage: '0.1-0.3%', function: 'Foam control' },
      { name: 'Water', percentage: 'Balance', function: 'Solvent' }
    ]
  },
  {
    id: 9,
    name: 'Bathroom Cleaner',
    category: 'Cleaning',
    description: 'Multi-surface bathroom cleaning formula',
    ingredients: [
      { name: 'Alkyl Dimethyl Benzyl Ammonium Chloride', percentage: '0.5-1%', function: 'Disinfectant' },
      { name: 'Alcohol Ethoxylate', percentage: '2-4%', function: 'Surfactant' },
      { name: 'Citric Acid', percentage: '1-3%', function: 'Descaling agent' },
      { name: 'Sodium Bicarbonate', percentage: '1-2%', function: 'Mild abrasive' },
      { name: 'Preservative', percentage: '0.1-0.2%', function: 'Preservation' },
      { name: 'Colorant', percentage: '0.01-0.1%', function: 'Color' },
      { name: 'Fragrance', percentage: '0.2-0.4%', function: 'Scent' },
      { name: 'Water', percentage: 'Balance', function: 'Solvent' }
    ]
  },
  {
    id: 10,
    name: 'Hand Soap Liquid',
    category: 'Personal Hygiene',
    description: 'Gentle hand washing formula with moisturizers',
    ingredients: [
      { name: 'Sodium Laureth Sulfate', percentage: '10-15%', function: 'Primary surfactant' },
      { name: 'Cocamidopropyl Betaine', percentage: '3-5%', function: 'Mild surfactant' },
      { name: 'Glycerin', percentage: '2-4%', function: 'Moisturizer' },
      { name: 'Sodium Chloride', percentage: '1-2%', function: 'Viscosity modifier' },
      { name: 'Citric Acid', percentage: '0.1-0.3%', function: 'pH adjuster' },
      { name: 'Preservative System', percentage: '0.3-0.5%', function: 'Preservation' },
      { name: 'Colorant', percentage: '0.01-0.1%', function: 'Color' },
      { name: 'Fragrance', percentage: '0.2-0.5%', function: 'Scent' },
      { name: 'Water', percentage: 'Balance', function: 'Solvent' }
    ]
  },
  {
    id: 11,
    name: 'Carpet Cleaner',
    category: 'Specialized Cleaning',
    description: 'Low-foam carpet and upholstery cleaning formula',
    ingredients: [
      { name: 'Alcohol Ethoxylate (Low Foam)', percentage: '3-6%', function: 'Surfactant' },
      { name: 'Sodium Tripolyphosphate', percentage: '2-4%', function: 'Builder' },
      { name: 'Optical Brightener', percentage: '0.1-0.2%', function: 'Brightening agent' },
      { name: 'Enzyme Blend', percentage: '0.5-1%', function: 'Stain removal' },
      { name: 'Sodium Carbonate', percentage: '1-3%', function: 'pH adjuster' },
      { name: 'Antifoam Agent', percentage: '0.1-0.2%', function: 'Foam control' },
      { name: 'Fragrance', percentage: '0.1-0.3%', function: 'Scent' },
      { name: 'Water', percentage: 'Balance', function: 'Solvent' }
    ]
  },
  {
    id: 12,
    name: 'Disinfectant Spray',
    category: 'Disinfection',
    description: 'Broad-spectrum disinfectant for surface sanitization',
    ingredients: [
      { name: 'Isopropyl Alcohol', percentage: '70-75%', function: 'Disinfectant' },
      { name: 'Hydrogen Peroxide', percentage: '0.5-1%', function: 'Oxidizing agent' },
      { name: 'Surfactant Blend', percentage: '0.1-0.3%', function: 'Wetting agent' },
      { name: 'Stabilizer', percentage: '0.1-0.2%', function: 'Product stability' },
      { name: 'Fragrance', percentage: '0.1-0.2%', function: 'Scent' },
      { name: 'Water', percentage: 'Balance', function: 'Solvent' }
    ]
  }
];

export default function HomecareFormulas() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Công Thức Tham Khảo Chăm Sóc Gia Đình</h1>
          <p className="text-xl">
            Hướng dẫn công thức chuyên nghiệp cho sản phẩm chăm sóc gia đình
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
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
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
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Tải PDF
                  </button>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
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