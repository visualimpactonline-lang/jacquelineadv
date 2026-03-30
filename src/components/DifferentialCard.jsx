import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

function DifferentialCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-[#FCF8F5] border border-[#E7DDD6] shadow-refined-lg transition-all duration-300 rounded-[24px]">
        <CardContent className="p-8 flex flex-col h-full text-center">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#D0A06B]/15">
              <Icon className="h-8 w-8 text-[#7A4E3A]" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-card-foreground mb-3">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default DifferentialCard;
