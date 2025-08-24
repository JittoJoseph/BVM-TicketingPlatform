"use client";

import { useEffect, useRef } from "react";

type Html5QrcodeScannerType = any;

export function QrScanner({ onResult }: { onResult: (text: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const scannerRef = useRef<Html5QrcodeScannerType | null>(null);
  const onResultRef = useRef(onResult);
  const readerIdRef = useRef<string>(
    `qr-reader-${Math.random().toString(36).slice(2)}`
  );

  // keep latest callback without retriggering init
  useEffect(() => {
    onResultRef.current = onResult;
  }, [onResult]);

  useEffect(() => {
    if (!ref.current || scannerRef.current) return;
    (async () => {
      const mod = await import("html5-qrcode");
      const Ctor = (mod as any).Html5QrcodeScanner;
      const ScanType = (mod as any).Html5QrcodeScanType;
      // ensure the container has our unique id
      ref.current!.id = readerIdRef.current;
      const scanner = new Ctor(ref.current!.id, {
        fps: 12,
        qrbox: { width: 220, height: 220 },
        aspectRatio: 1.0,
        rememberLastUsedCamera: true,
        showTorchButtonIfSupported: true,
        supportedScanTypes: [ScanType.SCAN_TYPE_CAMERA], // camera only, no file upload
      });
      scannerRef.current = scanner;
      scanner.render(
        (decodedText: string) => {
          onResultRef.current(decodedText);
        },
        () => {}
      );
    })();
    return () => {
      try {
        const s = scannerRef.current;
        scannerRef.current = null;
        s?.clear();
      } catch {}
      // remove any leftover UI to avoid doubled frames in strict mode
      if (ref.current) ref.current.innerHTML = "";
    };
  }, []);

  return <div ref={ref} className="rounded-xl overflow-hidden" />;
}
