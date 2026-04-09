import { usePortfolioSection } from '@/hooks/usePortfolioSection';
import { cn } from '@/lib/utils';

const ProductPrinciples = () => {
  const { ref, isVisible } = usePortfolioSection();

  return (
    <section
      ref={ref}
      className={cn(
        'py-16 px-4 md:py-24 md:px-8 transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Product Principles</h2>
        <p className="text-gray-600">Content here</p>
      </div>
    </section>
  );
};

export default ProductPrinciples;
