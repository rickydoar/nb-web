import PropertyCard from '@/components/PropertyCard';
import { pastTransactions } from '@/lib/data/properties';

export default function PastTransactionsPage() {
  const buyerTransactions = pastTransactions.filter(
    (p) => p.transactionType === 'buyer'
  );
  const sellerTransactions = pastTransactions.filter(
    (p) => p.transactionType === 'seller'
  );

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold text-gray-900 mb-4">
            Past Transactions
          </h1>
          <p className="text-gray-600 text-lg">
            Successfully closed sales representing both buyers and sellers
          </p>
        </div>

        {pastTransactions.length > 0 ? (
          <div className="space-y-16">
            {/* Buyer Representation */}
            {buyerTransactions.length > 0 && (
              <div>
                <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-8">
                  Buyer Representation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {buyerTransactions.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </div>
            )}

            {/* Seller Representation */}
            {sellerTransactions.length > 0 && (
              <div>
                <h2 className="font-serif text-3xl font-semibold text-gray-900 mb-8">
                  Seller Representation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sellerTransactions.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">
              No past transactions to display at this time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
