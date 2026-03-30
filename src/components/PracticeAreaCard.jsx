import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

function PracticeAreaCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-white border-[#E7DDD6] shadow-refined hover:shadow-refined-xl transition-all duration-300 rounded-[24px]">
        <CardContent className="p-8 flex flex-col h-full">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#5A3A2E]/8">
              <Icon className="h-7 w-7 text-[#5A3A2E]" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">
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

export default PracticeAreaCard;
