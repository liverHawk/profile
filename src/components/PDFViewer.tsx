import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Loader2, AlertCircle } from 'lucide-react';

const PDFViewer = ({ pdfUrl = null }) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageLoading, setPageLoading] = useState(false);
  const [scale, setScale] = useState(1);
  const canvasRef = useRef(null);
  const pdfDocRef = useRef(null);
  const renderTaskRef = useRef(null);
  const containerRef = useRef(null);

  // Theme colors
  const colors = {
    background: '#1a1a1a',
    surface: '#2d2d2d',
    primary: '#3b82f6',
    primaryHover: '#2563eb',
    text: '#ffffff',
    textSecondary: '#a0a0a0',
    border: '#404040',
    error: '#ef4444'
  };

  // Load PDF.js library
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    script.async = true;
    script.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;
      if (pdfUrl) {
        loadPDF();
      }
    };
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [pdfUrl]);

  // Load PDF document
  const loadPDF = async () => {
    if (!window.pdfjsLib || !pdfUrl) return;

    try {
      setLoading(true);
      setError(null);
      
      const loadingTask = window.pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      
      pdfDocRef.current = pdf;
      setNumPages(pdf.numPages);
      setLoading(false);
      
      setTimeout(() => {
        renderPage(1);
      }, 100);
    } catch (err) {
      console.error('Error loading PDF:', err);
      setError('PDFの読み込みに失敗しました。URLを確認して再度お試しください。');
      setLoading(false);
    }
  };

  // Render specific page
  const renderPage = useCallback(async (pageNum) => {
    if (!pdfDocRef.current || !canvasRef.current || !containerRef.current) return;

    try {
      setPageLoading(true);
      
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }

      const page = await pdfDocRef.current.getPage(pageNum);
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;
      
      const viewport = page.getViewport({ scale: 1 });
      const scaleX = (containerWidth - 40) / viewport.width;
      const scaleY = (containerHeight - 40) / viewport.height;
      const optimalScale = Math.min(scaleX, scaleY, 2);
      
      setScale(optimalScale);
      
      const scaledViewport = page.getViewport({ scale: optimalScale });
      
      canvas.width = scaledViewport.width;
      canvas.height = scaledViewport.height;
      
      const renderContext = {
        canvasContext: context,
        viewport: scaledViewport
      };
      
      renderTaskRef.current = page.render(renderContext);
      await renderTaskRef.current.promise;
      
      setPageLoading(false);
    } catch (err) {
      if (err.name !== 'RenderingCancelledException') {
        console.error('Error rendering page:', err);
        setPageLoading(false);
      }
    }
  }, []);

  // Navigation functions
  const goToPrevious = () => {
    if (pageNumber > 1) {
      const newPage = pageNumber - 1;
      setPageNumber(newPage);
      renderPage(newPage);
    }
  };

  const goToNext = () => {
    if (pageNumber < numPages) {
      const newPage = pageNumber + 1;
      setPageNumber(newPage);
      renderPage(newPage);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [pageNumber, numPages]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (pdfDocRef.current && !loading) {
        renderPage(pageNumber);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pageNumber, loading, renderPage]);

  return (
    <div 
      ref={containerRef}
      className="flex flex-col h-screen w-full"
      style={{ backgroundColor: colors.background }}
    >
      {/* Header */}
      <div 
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{ 
          backgroundColor: colors.surface,
          borderColor: colors.border 
        }}
      >
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-medium" style={{ color: colors.text }}>
            PDF Viewer
          </h1>
          {!loading && !error && (
            <span className="text-sm" style={{ color: colors.textSecondary }}>
              Page {pageNumber} of {numPages}
            </span>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        {loading && (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="animate-spin" size={48} style={{ color: colors.primary }} />
            <span style={{ color: colors.textSecondary }}>Loading PDF...</span>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center gap-4 max-w-md text-center px-4">
            <AlertCircle size={48} style={{ color: colors.error }} />
            <p style={{ color: colors.text }}>{error}</p>
            <button
              onClick={loadPDF}
              className="px-4 py-2 rounded-lg transition-colors duration-200"
              style={{ 
                backgroundColor: colors.primary,
                color: colors.text
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = colors.primaryHover}
              onMouseLeave={(e) => e.target.style.backgroundColor = colors.primary}
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* PDF Canvas */}
            <div className="relative">
              <canvas
                ref={canvasRef}
                className="shadow-2xl"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  opacity: pageLoading ? 0.5 : 1,
                  transition: 'opacity 0.2s'
                }}
              />
              {pageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="animate-spin" size={32} style={{ color: colors.primary }} />
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              disabled={pageNumber <= 1}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ 
                backgroundColor: colors.surface,
                color: colors.text,
                border: `1px solid ${colors.border}`
              }}
              onMouseEnter={(e) => !e.target.disabled && (e.target.style.backgroundColor = colors.border)}
              onMouseLeave={(e) => e.target.style.backgroundColor = colors.surface}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              disabled={pageNumber >= numPages}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ 
                backgroundColor: colors.surface,
                color: colors.text,
                border: `1px solid ${colors.border}`
              }}
              onMouseEnter={(e) => !e.target.disabled && (e.target.style.backgroundColor = colors.border)}
              onMouseLeave={(e) => e.target.style.backgroundColor = colors.surface}
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Footer */}
      {!loading && !error && (
        <div 
          className="flex items-center justify-center gap-4 px-4 py-3 border-t"
          style={{ 
            backgroundColor: colors.surface,
            borderColor: colors.border 
          }}
        >
          <div className="flex items-center gap-2">
            {Array.from({ length: Math.min(numPages, 10) }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => {
                  setPageNumber(i + 1);
                  renderPage(i + 1);
                }}
                className="w-2 h-2 rounded-full transition-all duration-200"
                style={{ 
                  backgroundColor: pageNumber === i + 1 ? colors.primary : colors.border,
                  transform: pageNumber === i + 1 ? 'scale(1.5)' : 'scale(1)'
                }}
              />
            ))}
            {numPages > 10 && (
              <span style={{ color: colors.textSecondary, fontSize: '12px' }}>
                +{numPages - 10} more
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;

